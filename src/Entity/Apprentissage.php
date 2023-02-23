<?php

namespace App\Entity;

use App\Repository\ApprentissageRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ApprentissageRepository::class)]
class Apprentissage
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(["progression", "apprentissages", "apprendre"])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(["progression", "apprentissages", "apprendre"])]
    private ?string $title = null;

    #[ORM\Column(type: Types::TEXT)]
    #[Groups(["apprentissages", "apprendre"])]
    private ?string $contenu = null;

    #[ORM\OneToOne(inversedBy: 'apprentissage', cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(["apprentissages", "apprendre"])]
    private ?Niveau $niveau = null;

    #[ORM\OneToMany(mappedBy: 'apprentissage', targetEntity: Question::class, cascade: ['persist', 'remove'])]
    #[Groups(["apprendre"])]
    private Collection $questions;

    #[ORM\OneToMany(mappedBy: 'apprentissage', targetEntity: Prerequis::class, orphanRemoval: true, cascade: ['persist', 'remove'])]
    #[Groups(["progression", "apprendre"])]
    private Collection $prerequis;

    public function __construct()
    {
        $this->questions = new ArrayCollection();
        $this->prerequis = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getContenu(): ?string
    {
        return $this->contenu;
    }

    public function setContenu(string $contenu): self
    {
        $this->contenu = $contenu;

        return $this;
    }

    public function getNiveau(): ?Niveau
    {
        return $this->niveau;
    }

    public function setNiveau(Niveau $niveau): self
    {
        $this->niveau = $niveau;

        return $this;
    }

    /**
     * @return Collection<int, Question>
     */
    public function getQuestions(): Collection
    {
        return $this->questions;
    }

    public function addQuestion(Question $question): self
    {
        if (!$this->questions->contains($question)) {
            $this->questions->add($question);
            $question->setApprentissage($this);
        }

        return $this;
    }

    public function removeQuestion(Question $question): self
    {
        if ($this->questions->removeElement($question)) {
            // set the owning side to null (unless already changed)
            if ($question->getApprentissage() === $this) {
                $question->setApprentissage(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Prerequis>
     */
    public function getPrerequis(): Collection
    {
        return $this->prerequis;
    }

    public function addPrerequi(Prerequis $prerequi): self
    {
        if (!$this->prerequis->contains($prerequi)) {
            $this->prerequis->add($prerequi);
            $prerequi->setApprentissage($this);
        }

        return $this;
    }

    public function removePrerequi(Prerequis $prerequi): self
    {
        if ($this->prerequis->removeElement($prerequi)) {
            // set the owning side to null (unless already changed)
            if ($prerequi->getApprentissage() === $this) {
                $prerequi->setApprentissage(null);
            }
        }

        return $this;
    }
}
