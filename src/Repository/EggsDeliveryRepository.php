<?php

namespace App\Repository;

use App\Entity\EggsDelivery;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method EggsDelivery|null find($id, $lockMode = null, $lockVersion = null)
 * @method EggsDelivery|null findOneBy(array $criteria, array $orderBy = null)
 * @method EggsDelivery[]    findAll()
 * @method EggsDelivery[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EggsDeliveryRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, EggsDelivery::class);
    }


    public function warehouseEggs($herd)
    {
        return $this->createQueryBuilder('ed')
            ->select('ed.id', 'ed.eggsNumber', 'SUM(eid.eggsNumber) as eggs')
            ->leftJoin('ed.eggsInputDetails', 'eid')
            ->where('ed.herd = :herd')
            ->setParameter('herd', $herd)
            ->groupBy('ed.id')
            ->getQuery()
            ->getResult()
            ;
    }

    // /**
    //  * @return EggsDelivery[] Returns an array of EggsDelivery objects
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
    public function findOneBySomeField($value): ?EggsDelivery
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
