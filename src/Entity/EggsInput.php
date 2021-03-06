<?php

namespace App\Entity;

use App\Repository\EggsInputRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=EggsInputRepository::class)
 * @ApiResource(
 *     collectionOperations={
 *          "get", "post"
 *     },
 *     normalizationContext={
 *          "groups"={"get_eggs_inputs"}
 *     }
 * )
 */
class EggsInput
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"get_eggs_inputs"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=15)
     * @Groups({"get_eggs_delivery", "get_eggs_inputs"})
     */
    private $name;

    /**
     * @ORM\Column(type="date")
     * @Groups({"get_eggs_delivery", "get_eggs_inputs"})
     */
    private $inputDate;

    /**
     * @ORM\OneToMany(targetEntity=EggsInputDetails::class, mappedBy="eggsInput")
     * @Groups({"get_eggs_inputs"})
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

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getInputDate(): ?\DateTimeInterface
    {
        return $this->inputDate;
    }

    public function setInputDate(\DateTimeInterface $inputDate): self
    {
        $this->inputDate = $inputDate;

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
            $eggsInputDetail->setEggsInput($this);
        }

        return $this;
    }

    public function removeEggsInputDetail(EggsInputDetails $eggsInputDetail): self
    {
        if ($this->eggsInputDetails->removeElement($eggsInputDetail)) {
            // set the owning side to null (unless already changed)
            if ($eggsInputDetail->getEggsInput() === $this) {
                $eggsInputDetail->setEggsInput(null);
            }
        }

        return $this;
    }
}
