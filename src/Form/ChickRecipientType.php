<?php

namespace App\Form;

use App\Entity\ChickRecipient;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TelType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ChickRecipientType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class, [
                'label' => 'form.chickRecipient.name'
            ])
            ->add('email', EmailType::class, [
                'label' => 'form.chickRecipient.email'
            ])
            ->add('phoneNumber', TelType::class, [
                'label' => 'form.chickRecipient.phoneNumber',
                'require' => false
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => ChickRecipient::class,
        ]);
    }
}
