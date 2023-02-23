<?php

namespace App\Entity;

use App\Repository\PrerequisRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: PrerequisRepository::class)]
class Prerequis
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(["progression", "apprendre"])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(["progression", "apprendre"])]
    private ?string $libelle = null;

    #[ORM\ManyToOne(inversedBy: 'prerequis')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Apprentissage $apprentissage = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    public function setLibelle(string $libelle): self
    {
        $this->libelle = $libelle;

        return $this;
    }

    public function getApprentissage(): ?Apprentissage
    {
        return $this->apprentissage;
    }

    public function setApprentissage(?Apprentissage $apprentissage): self
    {
        $this->apprentissage = $apprentissage;

        return $this;
    }
}
