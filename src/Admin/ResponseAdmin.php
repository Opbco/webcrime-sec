<?php
// src/Admin/NiveauAdmin.php

namespace App\Admin;

use App\Entity\Question;
use App\Entity\Response;
use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Form\Type\ModelType;
use Sonata\AdminBundle\Show\ShowMapper;
use Sonata\DoctrineORMAdminBundle\Filter\BooleanFilter;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\TextType;

final class ResponseAdmin extends AbstractAdmin
{

    public function toString(object $object): string
    {
        return $object instanceof Response
            ? 'Response '.$object->getLibelle()
            : 'Response'; // shown in the breadcrumb on the create view
    }

    protected function configureFormFields(FormMapper $form): void
    {
        $form->add('libelle', TextType::class, ['required'=>true])
            ->add('status', CheckboxType::class, ['required'=>false, 'label'=>'Correcte'])
            ->add('question', ModelType::class, [
                'class' => Question::class,
                'property' => 'libelle',
                'required' => true
            ]);
    }

    protected function configureDatagridFilters(DatagridMapper $datagrid): void
    {
        $datagrid->add('libelle')
                ->add('status', BooleanFilter::class, ['label'=>'Correcte'])
                ->add('question', null, [
                    'field_type' => EntityType::class,
                    'field_options' => [
                        'class' => Question::class,
                        'choice_label' => 'libelle',
                    ],
                ]);
    }

    protected function configureListFields(ListMapper $list): void
    {
        $list->addIdentifier('id')
            ->add('libelle')
            ->add('status', null, ['editable' => true, 'label'=>'Correcte'])
            ->add('question.libelle');
    }

    protected function configureShowFields(ShowMapper $show): void
    {
        $show->add('id')->add('libelle')->add('status', null, ['label'=>'Correcte'])->add('question.libelle');
    }
}