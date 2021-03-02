module.exports = function (sequelize, DataTypes) {
	let Project = sequelize.define("Project", {		
		title: {
			type: DataTypes.STRING,
			allowNull: false
		},
		description: {
			type: DataTypes.STRING,
			allowNull: false
		},
		image_link: {
      type: DataTypes.STRING,
      allowNull: false
    },
    repo_link: {
			type: DataTypes.STRING,
			allowNull: false
		},
    deployed_link: {
      type: DataTypes.STRING,
      allowNull: false
    }
	});
	Project.associate = models => {
		models.Project.hasMany(models.ProjectSkills, {onDelete: "cascade"});
	}
	return Project;
};