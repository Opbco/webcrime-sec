<?php

namespace App\Entity;

use App\Repository\QuestionRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\ORM\Mapping as ORM;
use Exception;

#[ORM\Entity(repositoryClass: QuestionRepository::class)]
class Question
{

    const DIFFICULTY_EASY = 'facile';
    const DIFFICULTY_MEDIUM = 'moyen';
    const DIFFICULTY_STRONG= 'difficile';
    const TYPE_QCM = 'QCM';
    const TYPE_QRO = 'QRO';

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(["apprendre"])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(["apprendre"])]
    private ?string $libelle = null;

    #[ORM\Column(length: 10)]
    #[Groups(["apprendre"])]
    private ?string $difficulty = null;
    
    #[ORM\ManyToOne(targetEntity: Apprentissage::class, inversedBy: 'questions')]
    private ?Apprentissage $apprentissage = null;

    #[ORM\Column(length: 5)]
    #[Groups(["apprendre"])]
    private ?string $type = null;

    #[ORM\OneToMany(mappedBy: 'question', targetEntity: Response::class, orphanRemoval: true, cascade: ['persist', 'remove'])]
    #[Groups(["apprendre"])]
    private Collection $responses;

    public function __construct()
    {
        $this->responses = new ArrayCollection();
    }

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

    public function getDifficulty(): ?string
    {
        return $this->difficulty;
    }

    public function setDifficulty(string $difficulty): self
    {
        if(!in_array($difficulty, array(self::DIFFICULTY_EASY, self::DIFFICULTY_MEDIUM, self::DIFFICULTY_STRONG))){
            throw new \InvalidArgumentException("Invalid difficulty");
        }
        
        $this->difficulty = $difficulty;

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

    public function __toString()
    {
        $format = "Question (id: %s, libelle: %s, difficulty: %s, apprentissage: %s)";
        return sprintf($format, $this->id, $this->libelle, $this->difficulty, $this->apprentissage->getTitle());
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(string $type): self
    {
        if(!in_array($type, array(self::TYPE_QCM, self::TYPE_QRO))){
            throw new \InvalidArgumentException("Error Invalid Type");   
        }
        $this->type = $type;

        return $this;
    }

    /**
     * @return Collection<int, Response>
     */
    public function getResponses(): Collection
    {
        return $this->responses;
    }

    public function addResponse(Response $response): self
    {
        if (!$this->responses->contains($response)) {
            $this->responses->add($response);
            $response->setQuestion($this);
        }

        return $this;
    }

    public function removeResponse(Response $response): self
    {
        if ($this->responses->removeElement($response)) {
            // set the owning side to null (unless already changed)
            if ($response->getQuestion() === $this) {
                $response->setQuestion(null);
            }
        }

        return $this;
    }
}
