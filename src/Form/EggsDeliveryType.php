<?php

namespace App\Form;

use App\Entity\EggsDelivery;
use App\Entity\Herds;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class EggsDeliveryType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('deliveryDate', DateType::class, [
                'widget' => 'single_text'
            ])
            ->add('eggsNumber', NumberType::class)
            ->add('startLayingDate', DateType::class, [
                'widget' => 'single_text'
            ])
            ->add('endLayingDate', DateType::class, [
                'widget' => 'single_text'
            ])
            ->add('herd', EntityType::class, [
                'class' => Herds::class,
                'choice_label' => 'name'
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => EggsDelivery::class,
        ]);
    }
}
