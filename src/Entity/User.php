<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\ORM\Mapping as ORM;
use Sonata\UserBundle\Entity\BaseUser;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: UserRepository::class)]
class User extends BaseUser
{
    const LEVEL_FAIBLE = "Faible";
    const LEVEL_MOYEN = "Moyen";
    const LEVEL_ELEVE = "Élevé";

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(["progression"])]
    protected int $id;

    #[ORM\OneToOne(targetEntity:Progression::class, cascade: ['persist', 'remove'], inversedBy:'user')]
    #[ORM\JoinColumn(nullable:false)]
    private ?Progression $progression = null;


    //determine the starting level of a new user
    public function getStartingNiveau(): int
    {
        $starting = 1;
        
        if($this->age >= 21 && ($this->levelName == self::LEVEL_MOYEN || $this->levelName == self::LEVEL_MOYEN))
        {
            $starting = 9;
        }elseif((($this->age >= 14 && $this->age < 21) && ($this->levelName == self::LEVEL_MOYEN || $this->levelName == self::LEVEL_MOYEN)) or ($this->age > 21 && $this->levelName == self::LEVEL_FAIBLE))
        {
            $starting = 5;
        }

        return $starting;
    }

    public function getProgression(): ?Progression
    {
        return $this->progression;
    }

    public function setProgression(?Progression $progression): self
    {
        $this->progression = $progression;

        return $this;
    }
}
