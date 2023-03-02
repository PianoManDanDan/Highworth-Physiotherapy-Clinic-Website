#!/usr/bin/bash

echo_section () {
  echo ""
  echo "======================="
  echo "$*"
  echo "======================="
  echo ""
  sleep 1
}

echo_step () {
  echo "$*"
  echo ""
  sleep 1
}


echo "Would you like to run the app using Docker or npm?"
options=("Docker" "npm" "Quit")
select opt in "${options[@]}"
do
  case $opt in
    "Docker")
      echo_section "Setting up Docker"

      echo_step "Spinning down any existing docker containers..."
      docker-compose down

      read -p "Do you need to install dependencies? (Default: No) " -r
      if [[ $REPLY =~ ^[Yy](es)?$ ]]
      then
        echo_step "Installing dependencies..."
        docker-compose run npm install
      fi

      echo_step "Starting up new containers..."
      docker-compose up -d --build

      echo "Setup complete"
      echo "You can now access a dev build of the NextJS app on port 3000"
      echo "You can now access the component Storybook on port 6006"
      break
      ;;
    "npm")
      echo_section "Setting up npm"

      read -p "Do you need to install dependencies? (Default: No) " -r
      if [[ $REPLY =~ ^[Yy](es)?$ ]]
      then
        echo_step "Installing dependencies..."
        npm install
      fi

      echo_step "Starting app..."
      npm run dev
      break
      ;;
    "Quit")
      echo ""
      echo_step "Aborting startup"
      break
      ;;
    *) echo "invalid option $REPLY";;
  esac
done

exit 0
