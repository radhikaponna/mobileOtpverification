const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
const Tenant = require("./Tenant");

class PageSchema extends Model {
  static findByTenant(tenantId) {
    return this.findAll({
      where: {
        tenant_id: tenantId,
      },
    });
  }
}

PageSchema.init(
  {
    page_schema_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    tenant_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Tenant,
        key: "tenant_id",
      },
    },
    page_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    version: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    columns: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
    created_date: {
      type: DataTypes.BIGINT, // Store as EPOCH timestamp
      allowNull: false,
      defaultValue: () => Math.floor(Date.now() / 1000),
    },
    updated_date: {
      type: DataTypes.BIGINT, // Store as EPOCH timestamp
      allowNull: false,
      defaultValue: () => Math.floor(Date.now() / 1000),
    },
    status: {
      type: DataTypes.ENUM("active", "deleted"),
      allowNull: false,
      defaultValue: "active",
    },
  },
  {
    sequelize,
    modelName: "PageSchema",
    tableName: "page_schemas",
    timestamps: false,
    indexes: [
      {
        unique: true,
        fields: ["page_schema_id"], // Unique index only on primary key
      },
    ],
  }
);

// Define associations
Tenant.hasMany(PageSchema, { foreignKey: "tenant_id" });
PageSchema.belongsTo(Tenant, { foreignKey: "tenant_id" });

module.exports = PageSchema;
