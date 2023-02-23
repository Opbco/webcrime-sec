<?php

namespace App\Entity;

use App\Repository\ProgressionRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: ProgressionRepository::class)]
class Progression
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(["progression"])]
    private ?int $id = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(["progression"])]
    private ?Niveau $niveau = null;

    #[ORM\OneToOne(targetEntity: User::class, mappedBy:'progression')]
    #[Groups(["progression"])]
    private ?User $user = null;

    #[ORM\Column(nullable: true)]
    #[Groups(["progression"])]
    private ?int $score = null;

    #[ORM\Column(options:['default'=>false])]
    #[Groups(["progression"])]
    private ?bool $closed = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNiveau(): ?Niveau
    {
        return $this->niveau;
    }

    public function setNiveau(?Niveau $niveau): self
    {
        $this->niveau = $niveau;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function __toString()
    {
        $format = "Progression (id: %s, score: %s, niveau: %s, closed: %s)";
        return sprintf($format, $this->id, $this->score, $this->niveau->getLibelle(), $this->closed?'yes':'no');
    }

    public function setUser(User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getScore(): ?int
    {
        return $this->score;
    }

    public function setScore(?int $score): self
    {
        $this->score = $score;

        return $this;
    }

    public function isClosed(): ?bool
    {
        return $this->closed;
    }

    public function setClosed(bool $closed): self
    {
        $this->closed = $closed;

        return $this;
    }
}
