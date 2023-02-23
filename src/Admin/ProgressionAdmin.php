<?php
// src/Admin/NiveauAdmin.php

namespace App\Admin;

use App\Entity\Niveau;
use App\Entity\User;
use App\Entity\Progression;
use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Form\Type\ModelType;
use Sonata\AdminBundle\Show\ShowMapper;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;

final class ProgressionAdmin extends AbstractAdmin
{

    public function toString(object $object): string
    {
        return $object instanceof Progression
            ? 'Progression '.$object->getNiveau()->__toString().' '.$object->getUser()->getEmail()
            : 'Progression '; // shown in the breadcrumb on the create view
    }

    protected function configureFormFields(FormMapper $form): void
    {
        $form->add('score', IntegerType::class, ['required'=>true])
            ->add('niveau', ModelType::class, [
                'class' => Niveau::class,
                'property' => 'libelle',
                'required' => true
            ])
            ->add('closed', null, ['required'=>true]);
    }

    protected function configureDatagridFilters(DatagridMapper $datagrid): void
    {
        $datagrid->add('score')
                ->add('closed')
                ->add('niveau', null, [
                    'field_type' => EntityType::class,
                    'field_options' => [
                        'class' => Niveau::class,
                        'choice_label' => 'libelle',
                    ],
                ])
                ->add('user', null, [
                    'field_type' => EntityType::class,
                    'field_options' => [
                        'class' => User::class,
                        'choice_label' => 'email',
                    ],
                ]);
    }

    protected function configureListFields(ListMapper $list): void
    {
        $list->addIdentifier('id')
            ->add('score')
            ->add('niveau.libelle')
            ->add('niveau.stade.libelle')
            ->add('user')
            ->add('closed', null, ['editable' => true, 'label'=>'Closed']);
    }

    protected function configureShowFields(ShowMapper $show): void
    {
        $show->add('id')->add('score')->add('niveau.stade.libelle')->add('niveau.libelle')->add('user.email')->add('closed');
    }
}