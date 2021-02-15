<?php

namespace App\Entity;

use App\Repository\EggsDeliveryRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=EggsDeliveryRepository::class)
 */
class EggsDelivery
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="date")
     */
    private $deliveryDate;

    /**
     * @ORM\ManyToOne(targetEntity=Herds::class, inversedBy="eggsDeliveries")
     * @ORM\JoinColumn(nullable=false)
     */
    private $herd;

    /**
     * @ORM\Column(type="integer")
     */
    private $eggsNumber;

    /**
     * @ORM\Column(type="date")
     */
    private $startLayingDate;

    /**
     * @ORM\Column(type="date")
     */
    private $endLayingDate;

    /**
     * @ORM\OneToMany(targetEntity=EggsInputDetails::class, mappedBy="eggsDelivery")
     */
    private $eggsInputDetails;

    public function __construct()
    {
        $this->eggsInputDetails = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDeliveryDate(): ?\DateTimeInterface
    {
        return $this->deliveryDate;
    }

    public function setDeliveryDate(\DateTimeInterface $deliveryDate): self
    {
        $this->deliveryDate = $deliveryDate;

        return $this;
    }

    public function getHerd(): ?Herds
    {
        return $this->herd;
    }

    public function setHerd(?Herds $herd): self
    {
        $this->herd = $herd;

        return $this;
    }

    public function getEggsNumber(): ?int
    {
        return $this->eggsNumber;
    }

    public function setEggsNumber(int $eggsNumber): self
    {
        $this->eggsNumber = $eggsNumber;

        return $this;
    }

    public function getStartLayingDate(): ?\DateTimeInterface
    {
        return $this->startLayingDate;
    }

    public function setStartLayingDate(\DateTimeInterface $startLayingDate): self
    {
        $this->startLayingDate = $startLayingDate;

        return $this;
    }

    public function getEndLayingDate(): ?\DateTimeInterface
    {
        return $this->endLayingDate;
    }

    public function setEndLayingDate(\DateTimeInterface $endLayingDate): self
    {
        $this->endLayingDate = $endLayingDate;

        return $this;
    }

    /**
     * @return Collection|EggsInputDetails[]
     */
    public function getEggsInputDetails(): Collection
    {
        return $this->eggsInputDetails;
    }

    public function addEggsInputDetail(EggsInputDetails $eggsInputDetail): self
    {
        if (!$this->eggsInputDetails->contains($eggsInputDetail)) {
            $this->eggsInputDetails[] = $eggsInputDetail;
            $eggsInputDetail->setEggsDelivery($this);
        }

        return $this;
    }

    public function removeEggsInputDetail(EggsInputDetails $eggsInputDetail): self
    {
        if ($this->eggsInputDetails->removeElement($eggsInputDetail)) {
            // set the owning side to null (unless already changed)
            if ($eggsInputDetail->getEggsDelivery() === $this) {
                $eggsInputDetail->setEggsDelivery(null);
            }
        }

        return $this;
    }
}
