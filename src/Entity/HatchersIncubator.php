<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\HatchersIncubatorRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=HatchersIncubatorRepository::class)
 */
class HatchersIncubator
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=25)
     * @Groups({"get_eggs_inputs"})
     */
    private $name;

    /**
     * @ORM\Column(type="integer")
     */
    private $trolley;

    /**
     * @ORM\OneToMany(targetEntity=EggsInputDetails::class, mappedBy="hatcher")
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

    public function getTrolley(): ?int
    {
        return $this->trolley;
    }

    public function setTrolley(int $trolley): self
    {
        $this->trolley = $trolley;

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
            $eggsInputDetail->setHatcher($this);
        }

        return $this;
    }

    public function removeEggsInputDetail(EggsInputDetails $eggsInputDetail): self
    {
        if ($this->eggsInputDetails->removeElement($eggsInputDetail)) {
            // set the owning side to null (unless already changed)
            if ($eggsInputDetail->getHatcher() === $this) {
                $eggsInputDetail->setHatcher(null);
            }
        }

        return $this;
    }
}
