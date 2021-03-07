<?php

namespace App\Repository;

use App\Entity\SettersIncubator;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method SettersIncubator|null find($id, $lockMode = null, $lockVersion = null)
 * @method SettersIncubator|null findOneBy(array $criteria, array $orderBy = null)
 * @method SettersIncubator[]    findAll()
 * @method SettersIncubator[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SettersIncubatorRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, SettersIncubator::class);
    }

    // /**
    //  * @return SettersIncubator[] Returns an array of SettersIncubator objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?SettersIncubator
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
