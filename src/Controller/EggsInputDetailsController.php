<?php

namespace App\Controller;

use App\Entity\EggsInputDetails;
use App\Form\EggsInputDetailsType;
use App\Repository\EggsInputDetailsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/eggs_input_details")
 */
class EggsInputDetailsController extends AbstractController
{
    /**
     * @Route("/", name="eggs_input_details_index", methods={"GET"})
     */
    public function index(EggsInputDetailsRepository $eggsInputDetailsRepository): Response
    {
        return $this->render('eggs_input_details/index.html.twig', [
            'eggs_input_details' => $eggsInputDetailsRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="eggs_input_details_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $eggsInputDetail = new EggsInputDetails();
        $form = $this->createForm(EggsInputDetailsType::class, $eggsInputDetail);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($eggsInputDetail);
            $entityManager->flush();

            return $this->redirectToRoute('eggs_input_details_index');
        }

        return $this->render('eggs_input_details/new.html.twig', [
            'eggs_input_detail' => $eggsInputDetail,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="eggs_input_details_show", methods={"GET"})
     */
    public function show(EggsInputDetails $eggsInputDetail): Response
    {
        return $this->render('eggs_input_details/show.html.twig', [
            'eggs_input_detail' => $eggsInputDetail,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="eggs_input_details_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, EggsInputDetails $eggsInputDetail): Response
    {
        $form = $this->createForm(EggsInputDetailsType::class, $eggsInputDetail);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('eggs_input_details_index');
        }

        return $this->render('eggs_input_details/edit.html.twig', [
            'eggs_input_detail' => $eggsInputDetail,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="eggs_input_details_delete", methods={"DELETE"})
     */
    public function delete(Request $request, EggsInputDetails $eggsInputDetail): Response
    {
        if ($this->isCsrfTokenValid('delete'.$eggsInputDetail->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($eggsInputDetail);
            $entityManager->flush();
        }

        return $this->redirectToRoute('eggs_input_details_index');
    }
}
