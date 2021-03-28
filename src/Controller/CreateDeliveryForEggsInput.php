<?php


namespace App\Controller;

use App\Entity\EggsInputDetails;
use App\Repository\ChickRecipientRepository;
use App\Repository\EggsDeliveryRepository;
use App\Repository\EggsInputRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\SerializerInterface;

class CreateDeliveryForEggsInput extends AbstractController
{

    public function addDelivery(
        Request $request,
        EggsDeliveryRepository $eggsDeliveryRepository,
        SerializerInterface $serializer,
        EggsInputRepository $eggsInputRepository,
        ChickRecipientRepository $chickRecipientRepository
    )
    {
        $post = json_decode($request->getContent(), true);
        $em = $this->getDoctrine()->getManager();

        $result = null;
        $eggs = null;
        foreach ($post as $herd){
            $deliveries = $eggsDeliveryRepository->warehouseEggs($herd['breederId']);
            $eggs = $herd['eggs'];
            foreach ($deliveries as $delivery){
                $eggsState = $delivery['eggsNumber'] - $delivery['eggs'];
                if($eggs > 0){
                    if($eggsState < $eggs){
                        $eggsNumber = $eggsState;
                    }
                    if ($eggsState > $eggs){
                        $eggsNumber = $eggs;
                    }
                    $eggs = $eggs - $eggsNumber;
                    if($eggsNumber > 0) {
                        $eggsInputDetails = new EggsInputDetails();
                        $eggsInputDetails->setEggsInput($eggsInputRepository->find($herd['eggsInput']));
                        $eggsInputDetails->setEggsDelivery($eggsDeliveryRepository->find($delivery['id']));
                        $eggsInputDetails->setEggsNumber($eggsNumber);
                        $eggsInputDetails->setChickNumber($herd['chickNumber']);
                        $eggsInputDetails->setChickRecipient($chickRecipientRepository->find($herd['chickRecipient']));
                        $em->persist($eggsInputDetails);
                        $em->flush();
                        $result [] = $eggsInputDetails;
                    }
                }
            }
        }
        $data = $serializer->serialize($result, JsonEncoder::FORMAT);
        return new JsonResponse($data, Response::HTTP_OK, [], true);

    }

}