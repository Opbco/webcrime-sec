<?php

namespace App\Controller;

use App\Entity\Apprentissage;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(): Response
    {
        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }

    #[Route('/learn/{id}', name: 'app_learning')]
    public function learn(int $id, Apprentissage $apprentissage, SerializerInterface $serializer): Response
    {
        $sApprentissage = $serializer->serialize($apprentissage, 'json', ['groups' => 'apprendre']);

        return $this->render('Apprentissage/index.html.twig', [
            'apprentissage' => $sApprentissage,
            'current' => $id
        ]);
    }
}
