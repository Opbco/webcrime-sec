<?php
// src/Admin/StadeAdmin.php

namespace App\Admin;

use App\Entity\Apprentissage;
use App\Entity\Question;
use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Form\Type\ModelType;
use Sonata\AdminBundle\Show\ShowMapper;
use Sonata\DoctrineORMAdminBundle\Filter\ChoiceFilter;
use Sonata\Form\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;

final class QuestionAdmin extends AbstractAdmin
{

    public function toString(object $object): string
    {
        return $object instanceof Question
            ? 'Question '.$object->getLibelle()
            : 'Question'; // shown in the breadcrumb on the create view
    }

    protected function configureFormFields(FormMapper $form): void
    {
        $form->add('libelle', TextType::class)
            ->add('difficulty', ChoiceType::class, [
                'choices' => [
                    'Facile' => 'facile',
                    'Moyen' => 'moyen',
                    'Difficile' => 'difficile',
                ],
                'placeholder' => 'Choose a difficulty',
                'required' => true
            ])
            ->add('type', ChoiceType::class, [
                'choices' => [
                    'QRO' => 'QRO',
                    'QCM' => 'QCM',
                ],
                'placeholder' => 'Choose a type',
                'required' => true
            ])
            ->add('apprentissage', ModelType::class, [
                'class' => Apprentissage::class,
                'property' => 'title',
                'required' => false
            ])
            ->add('responses', CollectionType::class, [
                'type_options' => [
                    // Prevents the "Delete" option from being displayed
                    'delete' => false,
                    'delete_options' => [
                        // You may otherwise choose to put the field but hide it
                        'type'         => HiddenType::class,
                        // In that case, you need to fill in the options as well
                        'type_options' => [
                            'mapped'   => false,
                            'required' => false,
                        ]
                    ]
                ]
            ], [
                'edit' => 'inline',
                'inline' => 'table',
                'sortable' => 'position',
            ]);
    }

    protected function configureDatagridFilters(DatagridMapper $datagrid): void
    {
        $datagrid->add('libelle')
                ->add('difficulty')
                ->add('type', ChoiceFilter::class, [
                    'global_search' => true,
                    'field_type' => ChoiceType::class,
                    'field_options' => [
                        'choices' => [
                            'QRO' => 'QRO',
                            'QCM' => 'QCM',
                        ]
                    ], array('label' => 'Type')
                ])
                ->add('apprentissage', null, [
                    'field_type' => EntityType::class,
                    'field_options' => [
                        'class' => Apprentissage::class,
                        'choice_label' => 'title',
                    ],
                ]);
    }

    protected function configureListFields(ListMapper $list): void
    {
        $list->addIdentifier('id')
            ->addIdentifier('libelle')
            ->add('difficulty')
            ->add('type')
            ->add('apprentissage.title');
    }

    protected function configureShowFields(ShowMapper $show): void
    {
        $show->add('id')->add('libelle')->add('difficulty')->add('type')->add('apprentissage.title');
    }
}