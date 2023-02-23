<?php
// src/Admin/NiveauAdmin.php

namespace App\Admin;

use App\Entity\Apprentissage;
use App\Entity\Stade;
use App\Entity\Niveau;
use App\Entity\Question;
use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Form\Type\ModelType;
use Sonata\AdminBundle\Show\ShowMapper;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use FOS\CKEditorBundle\Form\Type\CKEditorType;
use Sonata\AdminBundle\FieldDescription\FieldDescriptionInterface;
use Sonata\Form\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\TextType;

final class ApprentissageAdmin extends AbstractAdmin
{

    public function toString(object $object): string
    {
        return $object instanceof Apprentissage
            ? 'Apprentissage '.$object->getTitle()
            : 'Apprentissage'; // shown in the breadcrumb on the create view
    }

    protected function configureFormFields(FormMapper $form): void
    {
        $admin = new QuestionAdmin();

        $form->add('title', TextType::class, ['required'=>true])
            ->add('contenu', CKEditorType::class, ['required'=>true])
            ->add('niveau', ModelType::class, [
                'class' => Niveau::class,
                'property' => 'libelle',
                'required' => true
            ])
            ->add('prerequis', CollectionType::class, [
                'type_options' => [
                    // Prevents the "Delete" option from being displayed
                    'delete' => true,
                ]
            ], [
                'edit' => 'inline',
                'inline' => 'table',
                'sortable' => 'position',
            ])
            ->add('questions', CollectionType::class, [
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
        $datagrid->add('title')
                ->add('niveau', null, [
                    'field_type' => EntityType::class,
                    'field_options' => [
                        'class' => Niveau::class,
                        'choice_label' => 'libelle',
                    ],
                ])
                ->add('niveau.stade', null, [
                    'field_type' => EntityType::class,
                    'field_options' => [
                        'class' => Stade::class,
                        'choice_label' => 'libelle',
                    ],
                ]);
    }

    protected function configureListFields(ListMapper $list): void
    {
        $list->addIdentifier('id')
            ->add('title')
            ->add('niveau.libelle')
            ->add('niveau.stade.libelle');
    }

    protected function configureShowFields(ShowMapper $show): void
    {
        $show->add('id')->add('title')->add('contenu', FieldDescriptionInterface::TYPE_HTML)->add('niveau');
    }
}