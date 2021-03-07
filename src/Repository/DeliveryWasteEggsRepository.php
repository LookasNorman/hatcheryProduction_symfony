<?php

namespace App\Repository;

use App\Entity\DeliveryWasteEggs;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method DeliveryWasteEggs|null find($id, $lockMode = null, $lockVersion = null)
 * @method DeliveryWasteEggs|null findOneBy(array $criteria, array $orderBy = null)
 * @method DeliveryWasteEggs[]    findAll()
 * @method DeliveryWasteEggs[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DeliveryWasteEggsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, DeliveryWasteEggs::class);
    }

    // /**
    //  * @return DeliveryWasteEggs[] Returns an array of DeliveryWasteEggs objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('d')
            ->andWhere('d.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('d.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?DeliveryWasteEggs
    {
        return $this->createQueryBuilder('d')
            ->andWhere('d.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
