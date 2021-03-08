<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\DeliveryWasteEggsRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=DeliveryWasteEggsRepository::class)
 */
class DeliveryWasteEggs
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"get_eggs_inputs"})
     */
    private $eggsNumber;

    /**
     * @ORM\ManyToOne(targetEntity=EggsInputDetails::class, inversedBy="deliveryWasteEggs")
     */
    private $deliveryInput;

    /**
     * @ORM\Column(type="date")
     */
    private $evaluationDate;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEggsNumber(): ?int
    {
        return $this->eggsNumber;
    }

    public function setEggsNumber(?int $eggsNumber): self
    {
        $this->eggsNumber = $eggsNumber;

        return $this;
    }

    public function getDeliveryInput(): ?EggsInputDetails
    {
        return $this->deliveryInput;
    }

    public function setDeliveryInput(?EggsInputDetails $deliveryInput): self
    {
        $this->deliveryInput = $deliveryInput;

        return $this;
    }

    public function getEvaluationDate(): ?\DateTimeInterface
    {
        return $this->evaluationDate;
    }

    public function setEvaluationDate(\DateTimeInterface $evaluationDate): self
    {
        $this->evaluationDate = $evaluationDate;

        return $this;
    }
}
