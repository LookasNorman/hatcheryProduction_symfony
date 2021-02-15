<?php

namespace App\Controller;

use App\Entity\ChickRecipient;
use App\Form\ChickRecipientType;
use App\Repository\ChickRecipientRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/chick_recipient")
 */
class ChickRecipientController extends AbstractController
{
    /**
     * @Route("/", name="chick_recipient_index", methods={"GET"})
     */
    public function index(ChickRecipientRepository $chickRecipientRepository): Response
    {
        return $this->render('chick_recipient/index.html.twig', [
            'chick_recipients' => $chickRecipientRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="chick_recipient_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $chickRecipient = new ChickRecipient();
        $form = $this->createForm(ChickRecipientType::class, $chickRecipient);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($chickRecipient);
            $entityManager->flush();

            return $this->redirectToRoute('chick_recipient_index');
        }

        return $this->render('chick_recipient/new.html.twig', [
            'chick_recipient' => $chickRecipient,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="chick_recipient_show", methods={"GET"})
     */
    public function show(ChickRecipient $chickRecipient): Response
    {
        return $this->render('chick_recipient/show.html.twig', [
            'chick_recipient' => $chickRecipient,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="chick_recipient_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, ChickRecipient $chickRecipient): Response
    {
        $form = $this->createForm(ChickRecipientType::class, $chickRecipient);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('chick_recipient_index');
        }

        return $this->render('chick_recipient/edit.html.twig', [
            'chick_recipient' => $chickRecipient,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="chick_recipient_delete", methods={"DELETE"})
     */
    public function delete(Request $request, ChickRecipient $chickRecipient): Response
    {
        if ($this->isCsrfTokenValid('delete'.$chickRecipient->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($chickRecipient);
            $entityManager->flush();
        }

        return $this->redirectToRoute('chick_recipient_index');
    }
}
