<?php

namespace App\Controller;

use App\Entity\EggsInput;
use App\Form\EggsInputType;
use App\Repository\EggsInputRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/eggs_input")
 */
class EggsInputController extends AbstractController
{
    /**
     * @Route("/", name="eggs_input_index", methods={"GET"})
     */
    public function index(EggsInputRepository $eggsInputRepository): Response
    {
        return $this->render('eggs_input/index.html.twig', [
            'eggs_inputs' => $eggsInputRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="eggs_input_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $eggsInput = new EggsInput();
        $form = $this->createForm(EggsInputType::class, $eggsInput);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($eggsInput);
            $entityManager->flush();

            return $this->redirectToRoute('eggs_input_index');
        }

        return $this->render('eggs_input/new.html.twig', [
            'eggs_input' => $eggsInput,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="eggs_input_show", methods={"GET"})
     */
    public function show(EggsInput $eggsInput): Response
    {
        return $this->render('eggs_input/show.html.twig', [
            'eggs_input' => $eggsInput,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="eggs_input_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, EggsInput $eggsInput): Response
    {
        $form = $this->createForm(EggsInputType::class, $eggsInput);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('eggs_input_index');
        }

        return $this->render('eggs_input/edit.html.twig', [
            'eggs_input' => $eggsInput,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="eggs_input_delete", methods={"DELETE"})
     */
    public function delete(Request $request, EggsInput $eggsInput): Response
    {
        if ($this->isCsrfTokenValid('delete'.$eggsInput->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($eggsInput);
            $entityManager->flush();
        }

        return $this->redirectToRoute('eggs_input_index');
    }
}
