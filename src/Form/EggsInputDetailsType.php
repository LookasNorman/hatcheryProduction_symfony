<?php

namespace App\Form;

use App\Entity\ChickRecipient;
use App\Entity\EggsDelivery;
use App\Entity\EggsInput;
use App\Entity\EggsInputDetails;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class EggsInputDetailsType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('eggsNumber', NumberType::class, [
                'label' => 'form.eggsInputDetails.eggsNumber'
            ])
            ->add('chickNumber', NumberType::class, [
                'label' => 'form.eggsInputDetails.chickNumber'
            ])
            ->add('eggsInput', EntityType::class, [
                'class' => EggsInput::class,
                'choice_label' => 'name',
                'label' => 'form.eggsInputDetails.eggsInput.label',
                'placeholder' => 'form.eggsInputDetails.eggsInput.placeholder'
            ])
            ->add('eggsDelivery', EntityType::class, [
                'class' => EggsDelivery::class,
                'choice_label' => 'eggsNumber',
                'label' => 'form.eggsInputDetails.eggsDelivery.label',
                'placeholder' => 'form.eggsInputDetails.eggsDelivery.placeholder'
            ])
            ->add('chickRecipient', EntityType::class, [
                'class' => ChickRecipient::class,
                'choice_label' => 'name',
                'label' => 'form.eggsInputDetails.chickRecipient.label',
                'placeholder' => 'form.eggsInputDetails.chickRecipient.placeholder'
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => EggsInputDetails::class,
        ]);
    }
}
