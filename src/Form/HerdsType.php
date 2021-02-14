<?php

namespace App\Form;

use App\Entity\Breed;
use App\Entity\Breeders;
use App\Entity\Herds;
use Doctrine\ORM\EntityRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class HerdsType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class)
            ->add('hatchingDate', DateType::class, [
                'widget' => 'single_text'
            ])
            ->add('breeder', EntityType::class, [
                'class' => Breeders::class,
                'choice_label' => 'name',
                'placeholder' => 'Choose an breeders name'
            ])
            ->add('breed', EntityType::class, [
                'class' => Breed::class,
                'choice_label' => function(Breed $breed) {
                return $breed->getName() . ' ' . $breed->getBreedType();
                },
                'placeholder' => 'Choose an breed type'
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Herds::class,
        ]);
    }
}
