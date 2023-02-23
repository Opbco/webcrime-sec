<?php

namespace App\Service;

use App\Entity\Apprentissage;
use App\Entity\Niveau;
use App\Entity\Progression;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Serializer\SerializerInterface;

class GetData
{

    private $em;
    private $serializer;

    public function __construct(EntityManagerInterface $entityManagerInterface, SerializerInterface $serializerInterface)
    {
        $this->em = $entityManagerInterface;
        $this->serializer = $serializerInterface;
    }


    public function getNiveaux()
    {
        $niveauxRepository = $this->em->getRepository(Niveau::class);

        $niveaux = $niveauxRepository->findBy([], ['stade'=>'ASC', 'id'=>'ASC']);

        return $this->serializer->serialize($niveaux, 'json', ['groups' => 'niveaux']);
    }

    public function getApprentissages()
    {
        $apprentissageRepository = $this->em->getRepository(Apprentissage::class);

        $apprentissages = $apprentissageRepository->findAllOrderByNiveau();

        return $this->serializer->serialize($apprentissages, 'json', ['groups' => 'apprentissages']);
    }

    public function getProgressions()
    {
        $progressionRepository = $this->em->getRepository(Progression::class);

        $progressions = $progressionRepository->findBy([], ['score'=>'DESC'], '10, 0', null);

        return $this->serializer->serialize($progressions, 'json', ['groups' => 'progression']);
    }
}