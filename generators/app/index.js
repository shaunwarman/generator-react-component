const Yeoman = require('yeoman-generator');
const Chalk = require('chalk');
const Yosay = require('yosay');

module.exports = Yeoman.Base.extend({
  prompting() {
    this.log(Yosay(
      `Welcome to ${Chalk.red('generator-react-2017')}`
    ));

    const prompts = [{
      type: 'list',
      name: 'component',
      message: 'Type of react component?',
      choices: ['Isolated', 'In-app']
    },{
      type: 'input',
      name: 'componentName',
      message: 'What is the component name?',
      confirm: true
    }];

    return this.prompt(prompts).then((props) => {
        this.props = props;
    });
  },

  writing() {
    const choice = (this.props.component === 'Isolated') ? 'isolated' : 'combined';
    const destination = (choice === 'combined') ? this.props.componentName : '.';

    // copy all regular files
    this.fs.copyTpl(
      this.templatePath(choice),
      this.destinationPath(destination),
      {componentName: this.props.componentName || undefined}
    );

    // // copy all dotfiles
    this.fs.copy(
      this.templatePath(`${choice}/.*`),
      this.destinationRoot(destination)
    );
  },

  install() {
    // if (this.props.component === 'Isolated') {
    //     this.installDependencies();
    // }
  }
});
