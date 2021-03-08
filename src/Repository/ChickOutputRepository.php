<?php

namespace App\Repository;

use App\Entity\ChickOutput;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ChickOutput|null find($id, $lockMode = null, $lockVersion = null)
 * @method ChickOutput|null findOneBy(array $criteria, array $orderBy = null)
 * @method ChickOutput[]    findAll()
 * @method ChickOutput[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ChickOutputRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ChickOutput::class);
    }

    // /**
    //  * @return ChickOutput[] Returns an array of ChickOutput objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?ChickOutput
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
