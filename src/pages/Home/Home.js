import React, { Component } from 'react';
import Carousel from '../../components/Carousel/Carousel';
import styles from './Home.module.scss';
import LabelImportantTwoToneIcon from '@material-ui/icons/LabelImportantTwoTone';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
class Home extends Component {
  render() {
    return (
      <div className={styles.homePage}>
        <section className={styles.sliderHolder}>
          <div className={styles.sliderSection}>
            <Carousel/>
          </div>
          <div className={styles.bannersSection}>
            <div>
              1
            </div>
            <div>
              2
            </div>
          </div>
        </section>
        <section className={styles.contentHolder}>
          <h1 className={styles.storeDescription}>the biggest sport nutrition online shop</h1>
          <div className={styles.cardHolder}>
            <Card className={styles.cardItem}>
              <CardContent>
                <LabelImportantTwoToneIcon
                  color={'primary'}
                  fontSize={'large'}
                  className={
                    styles.labelIcon
                  }
                />
                <span className={styles.cardDescription}>low prices</span>
              </CardContent>
            </Card>
            <Card className={styles.cardItem}>
              <CardContent>
                <span className={styles.cardDescription}>online consultation</span>
              </CardContent>
            </Card>
            <Card className={styles.cardItem}>
              <CardContent>
                <span className={styles.cardDescription}>wide range</span>
                <br/>
                <span>of goods</span>
              </CardContent>
            </Card>
            <Card className={styles.cardItem}>
              <CardContent>
                <span className={styles.cardDescription}>wide range</span>
                <br/>
                <span>of goods</span>
              </CardContent>
            </Card>
          </div> 
          <p>home works</p>
        </section>
      </div>
    );
  }
}

export default Home;