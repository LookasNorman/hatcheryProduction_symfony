<?php

namespace App\Repository;

use App\Entity\EggsInputDetails;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method EggsInputDetails|null find($id, $lockMode = null, $lockVersion = null)
 * @method EggsInputDetails|null findOneBy(array $criteria, array $orderBy = null)
 * @method EggsInputDetails[]    findAll()
 * @method EggsInputDetails[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EggsInputDetailsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, EggsInputDetails::class);
    }

    // /**
    //  * @return EggsInputDetails[] Returns an array of EggsInputDetails objects
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
    public function findOneBySomeField($value): ?EggsInputDetails
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
