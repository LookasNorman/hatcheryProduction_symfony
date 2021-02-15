<?php

namespace App\Entity;

use App\Repository\EggsInputDetailsRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=EggsInputDetailsRepository::class)
 */
class EggsInputDetails
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=EggsInput::class, inversedBy="eggsInputDetails")
     * @ORM\JoinColumn(nullable=false)
     */
    private $eggsInput;

    /**
     * @ORM\ManyToOne(targetEntity=EggsDelivery::class, inversedBy="eggsInputDetails")
     * @ORM\JoinColumn(nullable=false)
     */
    private $eggsDelivery;

    /**
     * @ORM\Column(type="integer")
     */
    private $eggsNumber;

    /**
     * @ORM\ManyToOne(targetEntity=ChickRecipient::class, inversedBy="eggsInputDetails")
     * @ORM\JoinColumn(nullable=false)
     */
    private $chickRecipient;

    /**
     * @ORM\Column(type="integer")
     */
    private $chickNumber;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEggsInput(): ?EggsInput
    {
        return $this->eggsInput;
    }

    public function setEggsInput(?EggsInput $eggsInput): self
    {
        $this->eggsInput = $eggsInput;

        return $this;
    }

    public function getEggsDelivery(): ?EggsDelivery
    {
        return $this->eggsDelivery;
    }

    public function setEggsDelivery(?EggsDelivery $eggsDelivery): self
    {
        $this->eggsDelivery = $eggsDelivery;

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

    public function getChickRecipient(): ?ChickRecipient
    {
        return $this->chickRecipient;
    }

    public function setChickRecipient(?ChickRecipient $chickRecipient): self
    {
        $this->chickRecipient = $chickRecipient;

        return $this;
    }

    public function getChickNumber(): ?int
    {
        return $this->chickNumber;
    }

    public function setChickNumber(int $chickNumber): self
    {
        $this->chickNumber = $chickNumber;

        return $this;
    }
}
