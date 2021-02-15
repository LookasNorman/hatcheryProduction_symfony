<?php

namespace App\Repository;

use App\Entity\EggsInput;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method EggsInput|null find($id, $lockMode = null, $lockVersion = null)
 * @method EggsInput|null findOneBy(array $criteria, array $orderBy = null)
 * @method EggsInput[]    findAll()
 * @method EggsInput[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EggsInputRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, EggsInput::class);
    }

    // /**
    //  * @return EggsInput[] Returns an array of EggsInput objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('e.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?EggsInput
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
