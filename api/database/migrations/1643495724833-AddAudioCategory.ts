import {MigrationInterface, QueryRunner} from "typeorm";

export class AddAudioCategory1643495724833 implements MigrationInterface {
    name = 'AddAudioCategory1643495724833'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."audio_category_tier_enum" AS ENUM('FREE', 'PREMIUM')`);
        await queryRunner.query(`CREATE TABLE "audio_category" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "tier" "public"."audio_category_tier_enum" NOT NULL DEFAULT 'FREE', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_bf0384956aded3aa3c1473e57e1" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "audio_category"`);
        await queryRunner.query(`DROP TYPE "public"."audio_category_tier_enum"`);
    }

}
