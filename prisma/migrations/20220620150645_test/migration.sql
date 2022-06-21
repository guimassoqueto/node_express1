BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Product] (
    [id] INT NOT NULL IDENTITY(1,1),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Product_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    [title] VARCHAR(255) NOT NULL,
    [image] VARCHAR(100) NOT NULL,
    [price] DECIMAL(7,2) NOT NULL,
    [description] VARCHAR(max) NOT NULL,
    [available] INT NOT NULL CONSTRAINT [Product_available_df] DEFAULT 0,
    [createdBy] INT NOT NULL,
    CONSTRAINT [Product_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[User] (
    [id] INT NOT NULL IDENTITY(1,1),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [User_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    [name] VARCHAR(100) NOT NULL,
    [email] VARCHAR(100) NOT NULL,
    CONSTRAINT [User_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[ProductsOnCart] (
    [productId] INT NOT NULL,
    [userId] INT NOT NULL,
    CONSTRAINT [ProductsOnCart_pkey] PRIMARY KEY CLUSTERED ([productId],[userId])
);

-- CreateTable
CREATE TABLE [dbo].[Orders] (
    [id] INT NOT NULL IDENTITY(1,1),
    [orderOwner] INT NOT NULL,
    [orderDate] DATETIME2 NOT NULL CONSTRAINT [Orders_orderDate_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [Orders_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[OrderDetails] (
    [productId] INT NOT NULL,
    [orderId] INT NOT NULL,
    CONSTRAINT [OrderDetails_pkey] PRIMARY KEY CLUSTERED ([productId],[orderId])
);

-- AddForeignKey
ALTER TABLE [dbo].[Product] ADD CONSTRAINT [Product_createdBy_fkey] FOREIGN KEY ([createdBy]) REFERENCES [dbo].[User]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[ProductsOnCart] ADD CONSTRAINT [ProductsOnCart_productId_fkey] FOREIGN KEY ([productId]) REFERENCES [dbo].[Product]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[ProductsOnCart] ADD CONSTRAINT [ProductsOnCart_userId_fkey] FOREIGN KEY ([userId]) REFERENCES [dbo].[User]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Orders] ADD CONSTRAINT [Orders_orderOwner_fkey] FOREIGN KEY ([orderOwner]) REFERENCES [dbo].[User]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[OrderDetails] ADD CONSTRAINT [OrderDetails_productId_fkey] FOREIGN KEY ([productId]) REFERENCES [dbo].[Product]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[OrderDetails] ADD CONSTRAINT [OrderDetails_orderId_fkey] FOREIGN KEY ([orderId]) REFERENCES [dbo].[Orders]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
