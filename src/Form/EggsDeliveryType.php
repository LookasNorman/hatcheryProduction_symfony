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
                'widget' => 'single_text',
                'label' => 'form.eggsDelivery.deliveryDate'
            ])
            ->add('eggsNumber', NumberType::class, [
                'label' => 'form.eggsDelivery.eggsNumber'
            ])
            ->add('startLayingDate', DateType::class, [
                'widget' => 'single_text',
                'label' => 'form.eggsDelivery.startLayingDate'
            ])
            ->add('endLayingDate', DateType::class, [
                'widget' => 'single_text',
                'label' => 'form.eggsDelivery.endLayingDate'
            ])
            ->add('herd', EntityType::class, [
                'class' => Herds::class,
                'choice_label' => 'name',
                'label' => 'form.eggsDelivery.herd'
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
