<?php

namespace App\Entity;

use App\Repository\EggsInputDetailsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=EggsInputDetailsRepository::class)
 * @ApiResource()
 */
class EggsInputDetails
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"get_eggs_inputs", "get_eggs_delivery"})
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=EggsInput::class, inversedBy="eggsInputDetails")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"get_eggs_delivery"})
     */
    private $eggsInput;

    /**
     * @ORM\ManyToOne(targetEntity=EggsDelivery::class, inversedBy="eggsInputDetails")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"get_eggs_inputs"})
     */
    private $eggsDelivery;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"get_eggs_delivery", "get_eggs_inputs"})
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

    /**
     * @ORM\ManyToOne(targetEntity=SettersIncubator::class, inversedBy="eggsInputDetails")
     * @Groups({"get_eggs_inputs"})
     */
    private $setter;

    /**
     * @ORM\ManyToOne(targetEntity=HatchersIncubator::class, inversedBy="eggsInputDetails")
     * @Groups({"get_eggs_inputs"})
     */
    private $hatcher;

    /**
     * @ORM\OneToMany(targetEntity=DeliveryWasteEggs::class, mappedBy="deliveryInput")
     * @Groups({"get_eggs_inputs"})
     */
    private $deliveryWasteEggs;

    /**
     * @ORM\OneToMany(targetEntity=WasteEggsLighting::class, mappedBy="deliveryInput")
     * @Groups({"get_eggs_inputs"})
     */
    private $wasteEggsLighting;

    public function __construct()
    {
        $this->deliveryWasteEggs = new ArrayCollection();
        $this->wasteEggsLighting = new ArrayCollection();
    }

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

    public function getSetter(): ?SettersIncubator
    {
        return $this->setter;
    }

    public function setSetter(?SettersIncubator $setter): self
    {
        $this->setter = $setter;

        return $this;
    }

    public function getHatcher(): ?HatchersIncubator
    {
        return $this->hatcher;
    }

    public function setHatcher(?HatchersIncubator $hatcher): self
    {
        $this->hatcher = $hatcher;

        return $this;
    }

    /**
     * @return Collection|DeliveryWasteEggs[]
     */
    public function getDeliveryWasteEggs(): Collection
    {
        return $this->deliveryWasteEggs;
    }

    public function addDeliveryWasteEgg(DeliveryWasteEggs $deliveryWasteEgg): self
    {
        if (!$this->deliveryWasteEggs->contains($deliveryWasteEgg)) {
            $this->deliveryWasteEggs[] = $deliveryWasteEgg;
            $deliveryWasteEgg->setDeliveryInput($this);
        }

        return $this;
    }

    public function removeDeliveryWasteEgg(DeliveryWasteEggs $deliveryWasteEgg): self
    {
        if ($this->deliveryWasteEggs->removeElement($deliveryWasteEgg)) {
            // set the owning side to null (unless already changed)
            if ($deliveryWasteEgg->getDeliveryInput() === $this) {
                $deliveryWasteEgg->setDeliveryInput(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|WasteEggsLighting[]
     */
    public function getWasteEggsLighting(): Collection
    {
        return $this->wasteEggsLighting;
    }

    public function addEvaluationDate(WasteEggsLighting $evaluationDate): self
    {
        if (!$this->wasteEggsLighting->contains($evaluationDate)) {
            $this->wasteEggsLighting[] = $evaluationDate;
            $evaluationDate->setDeliveryInput($this);
        }

        return $this;
    }

    public function removeEvaluationDate(WasteEggsLighting $evaluationDate): self
    {
        if ($this->wasteEggsLighting->removeElement($evaluationDate)) {
            // set the owning side to null (unless already changed)
            if ($evaluationDate->getDeliveryInput() === $this) {
                $evaluationDate->setDeliveryInput(null);
            }
        }

        return $this;
    }

}
