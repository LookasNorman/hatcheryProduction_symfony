<?php

namespace App\Repository;

use App\Entity\ChickRecipient;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ChickRecipient|null find($id, $lockMode = null, $lockVersion = null)
 * @method ChickRecipient|null findOneBy(array $criteria, array $orderBy = null)
 * @method ChickRecipient[]    findAll()
 * @method ChickRecipient[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ChickRecipientRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ChickRecipient::class);
    }

    // /**
    //  * @return ChickRecipient[] Returns an array of ChickRecipient objects
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
    public function findOneBySomeField($value): ?ChickRecipient
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
