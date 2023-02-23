<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230218170101 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE prerequis (id INT AUTO_INCREMENT NOT NULL, apprentissage_id INT NOT NULL, libelle VARCHAR(255) NOT NULL, INDEX IDX_CAE3EB097225732A (apprentissage_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE prerequis ADD CONSTRAINT FK_CAE3EB097225732A FOREIGN KEY (apprentissage_id) REFERENCES apprentissage (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE prerequis DROP FOREIGN KEY FK_CAE3EB097225732A');
        $this->addSql('DROP TABLE prerequis');
    }
}
