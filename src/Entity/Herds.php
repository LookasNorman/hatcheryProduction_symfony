<?php

namespace App\Entity;

use App\Repository\HerdsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=HerdsRepository::class)
 */
class Herds
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $name;

    /**
     * @ORM\ManyToOne(targetEntity=Breeders::class, inversedBy="herds")
     * @ORM\JoinColumn(nullable=false)
     */
    private $breeder;

    /**
     * @ORM\Column(type="date")
     */
    private $hatchingDate;

    /**
     * @ORM\ManyToOne(targetEntity=Breed::class)
     * @ORM\JoinColumn(nullable=false)
     */
    private $breed;

    /**
     * @ORM\OneToMany(targetEntity=EggsDelivery::class, mappedBy="herd")
     */
    private $eggsDeliveries;

    public function __construct()
    {
        $this->eggsDeliveries = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getBreeder(): ?Breeders
    {
        return $this->breeder;
    }

    public function setBreeder(?Breeders $breeder): self
    {
        $this->breeder = $breeder;

        return $this;
    }

    public function getHatchingDate(): ?\DateTimeInterface
    {
        return $this->hatchingDate;
    }

    public function setHatchingDate(\DateTimeInterface $hatchingDate): self
    {
        $this->hatchingDate = $hatchingDate;

        return $this;
    }

    public function getBreed(): ?Breed
    {
        return $this->breed;
    }

    public function setBreed(?Breed $breed): self
    {
        $this->breed = $breed;

        return $this;
    }

    /**
     * @return Collection|EggsDelivery[]
     */
    public function getEggsDeliveries(): Collection
    {
        return $this->eggsDeliveries;
    }

    public function addEggsDelivery(EggsDelivery $eggsDelivery): self
    {
        if (!$this->eggsDeliveries->contains($eggsDelivery)) {
            $this->eggsDeliveries[] = $eggsDelivery;
            $eggsDelivery->setHerd($this);
        }

        return $this;
    }

    public function removeEggsDelivery(EggsDelivery $eggsDelivery): self
    {
        if ($this->eggsDeliveries->removeElement($eggsDelivery)) {
            // set the owning side to null (unless already changed)
            if ($eggsDelivery->getHerd() === $this) {
                $eggsDelivery->setHerd(null);
            }
        }

        return $this;
    }
}
