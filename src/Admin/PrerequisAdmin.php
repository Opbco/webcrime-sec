<?php
// src/Admin/NiveauAdmin.php

namespace App\Admin;

use App\Entity\Apprentissage;
use App\Entity\Prerequis;
use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Form\Type\ModelType;
use Sonata\AdminBundle\Show\ShowMapper;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\TextType;

final class PrerequisAdmin extends AbstractAdmin
{

    public function toString(object $object): string
    {
        return $object instanceof Prerequis
            ? 'Prerequi '.$object->getLibelle()
            : 'Prerequi'; // shown in the breadcrumb on the create view
    }

    protected function configureFormFields(FormMapper $form): void
    {
        $form->add('libelle', TextType::class, ['required'=>true])
            ->add('apprentissage', ModelType::class, [
                'class' => Apprentissage::class,
                'property' => 'title',
                'required' => true
            ]);
    }

    protected function configureDatagridFilters(DatagridMapper $datagrid): void
    {
        $datagrid->add('libelle')
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
            ->add('libelle')
            ->add('apprentissage.title');
    }

    protected function configureShowFields(ShowMapper $show): void
    {
        $show->add('id')->add('libelle')->add('apprentissage.title');
    }
}