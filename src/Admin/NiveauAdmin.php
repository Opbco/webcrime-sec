<?php
// src/Admin/NiveauAdmin.php

namespace App\Admin;

use App\Entity\Stade;
use App\Entity\Niveau;
use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Form\Type\ModelType;
use Sonata\AdminBundle\Show\ShowMapper;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;

final class NiveauAdmin extends AbstractAdmin
{

    public function toString(object $object): string
    {
        return $object instanceof Niveau
            ? 'Niveau '.$object->getLibelle()
            : 'Niveau'; // shown in the breadcrumb on the create view
    }

    protected function configureFormFields(FormMapper $form): void
    {
        $form->add('libelle', TextType::class, ['required'=>true])
            ->add('details', TextareaType::class, ['required'=>true])
            ->add('stade', ModelType::class, [
                'class' => Stade::class,
                'property' => 'libelle',
                'required' => true
            ]);
    }

    protected function configureDatagridFilters(DatagridMapper $datagrid): void
    {
        $datagrid->add('libelle')
                ->add('stade', null, [
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
            ->add('libelle', null, ['editable'=> true])
            ->add('details')
            ->add('stade.libelle');
    }

    protected function configureShowFields(ShowMapper $show): void
    {
        $show->add('id')->add('libelle')->add('stade.libelle');
    }
}