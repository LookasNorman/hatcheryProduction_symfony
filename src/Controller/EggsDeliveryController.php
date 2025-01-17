<?php

namespace App\Controller;

use App\Entity\EggsDelivery;
use App\Form\EggsDeliveryType;
use App\Repository\EggsDeliveryRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/eggs_delivery")
 */
class EggsDeliveryController extends AbstractController
{
    /**
     * @Route("/", name="eggs_delivery_index", methods={"GET"})
     * @param EggsDeliveryRepository $eggsDeliveryRepository
     * @return Response
     */
    public function index(EggsDeliveryRepository $eggsDeliveryRepository): Response
    {
        return $this->render('eggs_delivery/index.html.twig', [
            'eggs_deliveries' => $eggsDeliveryRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="eggs_delivery_new", methods={"GET","POST"})
     * @param Request $request
     * @return Response
     */
    public function new(Request $request): Response
    {
        $eggsDelivery = new EggsDelivery();
        $form = $this->createForm(EggsDeliveryType::class, $eggsDelivery);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($eggsDelivery);
            $entityManager->flush();

            return $this->redirectToRoute('eggs_delivery_index');
        }

        return $this->render('eggs_delivery/new.html.twig', [
            'eggs_delivery' => $eggsDelivery,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="eggs_delivery_show", methods={"GET"})
     * @param EggsDelivery $eggsDelivery
     * @return Response
     */
    public function show(EggsDelivery $eggsDelivery): Response
    {
        return $this->render('eggs_delivery/show.html.twig', [
            'eggs_delivery' => $eggsDelivery,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="eggs_delivery_edit", methods={"GET","POST"})
     * @param Request $request
     * @param EggsDelivery $eggsDelivery
     * @return Response
     */
    public function edit(Request $request, EggsDelivery $eggsDelivery): Response
    {
        $form = $this->createForm(EggsDeliveryType::class, $eggsDelivery);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('eggs_delivery_index');
        }

        return $this->render('eggs_delivery/edit.html.twig', [
            'eggs_delivery' => $eggsDelivery,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="eggs_delivery_delete", methods={"DELETE"})
     * @param Request $request
     * @param EggsDelivery $eggsDelivery
     * @return Response
     */
    public function delete(Request $request, EggsDelivery $eggsDelivery): Response
    {
        if ($this->isCsrfTokenValid('delete'.$eggsDelivery->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($eggsDelivery);
            $entityManager->flush();
        }

        return $this->redirectToRoute('eggs_delivery_index');
    }
}
