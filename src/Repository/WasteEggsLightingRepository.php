<?php

namespace App\Repository;

use App\Entity\WasteEggsLighting;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method WasteEggsLighting|null find($id, $lockMode = null, $lockVersion = null)
 * @method WasteEggsLighting|null findOneBy(array $criteria, array $orderBy = null)
 * @method WasteEggsLighting[]    findAll()
 * @method WasteEggsLighting[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class WasteEggsLightingRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, WasteEggsLighting::class);
    }

    // /**
    //  * @return WasteEggsLighting[] Returns an array of WasteEggsLighting objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('w')
            ->andWhere('w.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('w.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?WasteEggsLighting
    {
        return $this->createQueryBuilder('w')
            ->andWhere('w.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
