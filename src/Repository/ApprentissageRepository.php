<?php

namespace App\Repository;

use App\Entity\Apprentissage;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Apprentissage>
 *
 * @method Apprentissage|null find($id, $lockMode = null, $lockVersion = null)
 * @method Apprentissage|null findOneBy(array $criteria, array $orderBy = null)
 * @method Apprentissage[]    findAll()
 * @method Apprentissage[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ApprentissageRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Apprentissage::class);
    }

    public function save(Apprentissage $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Apprentissage $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }


   public function findAllOrderByNiveau(): array
   {
       return $this->getEntityManager()->createQuery('
            SELECT a
            FROM App:Apprentissage a, App:Niveau n
            WHERE a.niveau = n.id
            ORDER BY n.stade ASC, a.niveau ASC
        ')->getResult();
   }

//    /**
//     * @return Apprentissage[] Returns an array of Apprentissage objects
//     */
//    public function findOneBySomeField($value): ?Apprentissage
//    {
//        return $this->createQueryBuilder('a')
//            ->andWhere('a.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
