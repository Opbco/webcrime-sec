<?php

namespace App\Entity;

use App\Repository\NiveauRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: NiveauRepository::class)]
class Niveau
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(["progression", "niveaux", "apprentissages"])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(["progression", "niveaux", "apprentissages"])]
    private ?string $libelle = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $details = null;

    #[ORM\ManyToOne(inversedBy: 'niveaux')]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(["progression", "niveaux", "apprentissages"])]
    private ?Stade $stade = null;

    #[ORM\OneToOne(mappedBy: 'niveau', cascade: ['persist', 'remove'])]
    #[Groups(["progression"])]
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

    public function getDetails(): ?string
    {
        return $this->details;
    }

    public function setDetails(?string $details): self
    {
        $this->details = $details;

        return $this;
    }

    public function getStade(): ?Stade
    {
        return $this->stade;
    }

    public function __toString()
    {
        return $this->stade->getLibelle().' - '.$this->getLibelle();   
    }

    public function setStade(?Stade $stade): self
    {
        $this->stade = $stade;

        return $this;
    }

    public function getApprentissage(): ?Apprentissage
    {
        return $this->apprentissage;
    }

    public function setApprentissage(Apprentissage $apprentissage): self
    {
        // set the owning side of the relation if necessary
        if ($apprentissage->getNiveau() !== $this) {
            $apprentissage->setNiveau($this);
        }

        $this->apprentissage = $apprentissage;

        return $this;
    }
}
