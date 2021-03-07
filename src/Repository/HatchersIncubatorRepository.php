<?php

namespace App\Repository;

use App\Entity\HatchersIncubator;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method HatchersIncubator|null find($id, $lockMode = null, $lockVersion = null)
 * @method HatchersIncubator|null findOneBy(array $criteria, array $orderBy = null)
 * @method HatchersIncubator[]    findAll()
 * @method HatchersIncubator[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class HatchersIncubatorRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, HatchersIncubator::class);
    }

    // /**
    //  * @return HatchersIncubator[] Returns an array of HatchersIncubator objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('h')
            ->andWhere('h.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('h.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?HatchersIncubator
    {
        return $this->createQueryBuilder('h')
            ->andWhere('h.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
