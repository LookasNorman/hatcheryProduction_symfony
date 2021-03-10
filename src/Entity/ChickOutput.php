<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ChickOutputRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=ChickOutputRepository::class)
 */
class ChickOutput
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=EggsInputDetails::class, inversedBy="chickOutputs")
     */
    private $eggsInputDetails;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Groups({"get_eggs_inputs"})
     */
    private $hatching;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Groups({"get_eggs_inputs"})
     */
    private $missing;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEggsInputDetails(): ?EggsInputDetails
    {
        return $this->eggsInputDetails;
    }

    public function setEggsInputDetails(?EggsInputDetails $eggsInputDetails): self
    {
        $this->eggsInputDetails = $eggsInputDetails;

        return $this;
    }

    public function getHatching(): ?int
    {
        return $this->hatching;
    }

    public function setHatching(?int $hatching): self
    {
        $this->hatching = $hatching;

        return $this;
    }

    public function getMissing(): ?int
    {
        return $this->missing;
    }

    public function setMissing(?int $missing): self
    {
        $this->missing = $missing;

        return $this;
    }
}
