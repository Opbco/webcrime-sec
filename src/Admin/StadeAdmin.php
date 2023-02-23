<?php
// src/Admin/StadeAdmin.php

namespace App\Admin;

use App\Entity\Stade;
use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Show\ShowMapper;
use Symfony\Component\Form\Extension\Core\Type\TextType;

final class StadeAdmin extends AbstractAdmin
{

    public function toString(object $object): string
    {
        return $object instanceof Stade
            ? 'Stade '.$object->getLibelle()
            : 'Stade'; // shown in the breadcrumb on the create view
    }

    protected function configureFormFields(FormMapper $form): void
    {
        $form->add('libelle', TextType::class);
    }

    protected function configureDatagridFilters(DatagridMapper $datagrid): void
    {
        $datagrid->add('libelle');
    }

    protected function configureListFields(ListMapper $list): void
    {
        $list->addIdentifier('id')
            ->add('libelle');
    }

    protected function configureShowFields(ShowMapper $show): void
    {
        $show->add('id')->add('libelle');
    }
}