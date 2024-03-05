-- CreateTable
CREATE TABLE "users" (
    "user_id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "draft_users" (
    "user_id" INTEGER NOT NULL,
    "draft_id" INTEGER NOT NULL,
    "is_autodraft_on" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "draft_users_pkey" PRIMARY KEY ("user_id","draft_id")
);

-- CreateTable
CREATE TABLE "drafts" (
    "draft_id" SERIAL NOT NULL,
    "order_type" TEXT NOT NULL,
    "scoring_type" TEXT NOT NULL,
    "pick_time_seconds" INTEGER,
    "team_count" INTEGER NOT NULL,
    "pointguard_slots" INTEGER NOT NULL,
    "shootingguard_slots" INTEGER NOT NULL,
    "guard_slots" INTEGER NOT NULL,
    "smallforward_slots" INTEGER NOT NULL,
    "powerforward_slots" INTEGER NOT NULL,
    "forward_slots" INTEGER NOT NULL,
    "center_slots" INTEGER NOT NULL,
    "utility_slots" INTEGER NOT NULL,
    "bench_slots" INTEGER NOT NULL,
    "scheduled_by_user_id" INTEGER,

    CONSTRAINT "drafts_pkey" PRIMARY KEY ("draft_id")
);

-- CreateTable
CREATE TABLE "draft_orders" (
    "draft_order_id" SERIAL NOT NULL,
    "user_id" INTEGER,
    "draft_id" INTEGER NOT NULL,
    "team_number" INTEGER NOT NULL,
    "pick_number" INTEGER NOT NULL,

    CONSTRAINT "draft_orders_pkey" PRIMARY KEY ("draft_order_id")
);

-- CreateTable
CREATE TABLE "draft_invites" (
    "invite_id" SERIAL NOT NULL,
    "draft_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "creation_timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "draft_invites_pkey" PRIMARY KEY ("invite_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "draft_users" ADD CONSTRAINT "draft_users_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "draft_users" ADD CONSTRAINT "draft_users_draft_id_fkey" FOREIGN KEY ("draft_id") REFERENCES "drafts"("draft_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "drafts" ADD CONSTRAINT "drafts_scheduled_by_user_id_fkey" FOREIGN KEY ("scheduled_by_user_id") REFERENCES "users"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "draft_orders" ADD CONSTRAINT "draft_orders_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "draft_orders" ADD CONSTRAINT "draft_orders_draft_id_fkey" FOREIGN KEY ("draft_id") REFERENCES "drafts"("draft_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "draft_invites" ADD CONSTRAINT "draft_invites_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "draft_invites" ADD CONSTRAINT "draft_invites_draft_id_fkey" FOREIGN KEY ("draft_id") REFERENCES "drafts"("draft_id") ON DELETE CASCADE ON UPDATE CASCADE;
