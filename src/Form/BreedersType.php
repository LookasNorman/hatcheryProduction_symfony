<?php

namespace App\Form;

use App\Entity\Breeders;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class BreedersType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class, [
                'label' => 'form.breeders.name'
            ])
            ->add('email', EmailType::class, [
                'label' => 'form.breeders.email'
            ])
            ->add('phoneNumber', TextType::class, [
                'required' => false,
                'label' => 'form.breeders.phoneNumber'
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Breeders::class,
        ]);
    }
}
