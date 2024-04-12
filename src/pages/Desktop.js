import React, { useCallback, useState } from "react";
import ImageUpload from "../components/imageupload";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import styles from "./Desktop.module.css"; 

const Desktop = () => {
  const onFrameContainerClick = useCallback(() => {
    // Please sync "Frame 1" to the project
  }, []); 

  return (
    <div className={styles.desktop1}>
      <div className={styles.items} />
      <FrameComponent2 />
      <div className={styles.dividerWrapper}>
        <div className={styles.divider} />
      </div>
      <main className={styles.desktop1Inner}>
        <section className={styles.frameParent}>
          <div className={styles.searchBarWrapper}>
            <div className={styles.searchBar}>
              <div className={styles.searchBarChild} />
              <input
                className={styles.search}
                placeholder="Search"
                type="text"
              />
              <div className={styles.maleFemaleButtons}>
                <button className={styles.visual1Icon}
                />
              </div>
              <div className={styles.maleFemaleButtons1}>
                <img className={styles.searchIcon} alt="" src="/search.svg" />
              </div>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.enterDesiredProductDetailsParent}>
              <h1 className={styles.enterDesiredProductContainer}>
                <span className={styles.enterDesiredProductContainer1}>
                  <span>Enter desired pro</span>
                  <span className={styles.ductDetails}>duct details:</span>
                </span>
              </h1>
              <div className={styles.pexelsArtistNames}>
                <div className={styles.pexelsArtistNamesChild} />
                <div
                  className={styles.searchButtonWrapper}
                  onClick={onFrameContainerClick}
                >
                  <button className={styles.searchButton}>
                    <div className={styles.searchButtonChild} />
                    <div className={styles.search1}>Search</div>
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.searchResultContainer}>
              <div className={styles.imagePreviewsContainer}>
                <div className={styles.imagePreviewsContainerChild} />
                <img
                  className={styles.pexelsJenniferEnujiugha1125Icon}
                  loading="lazy"
                  alt=""
                  src="/pexelsjenniferenujiugha1125328-1@2x.png"
                />
              </div>
              <div className={styles.photo}>
                <img
                  className={styles.pexelsArshamHaghani3536991Icon}
                  loading="lazy"
                  alt=""
                  src="/pexelsarshamhaghani3536991-1@2x.png"
                />
                <div className={styles.photoChild} />
                <img
                  className={styles.fe73801efbaa937692ea0f0826b756Icon}
                  loading="lazy"
                  alt=""
                  src="/fe73801efbaa937692ea0f0826b756ba-1@2x.png"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className={styles.dividerContainer}>
        <div className={styles.divider1} />
      </div>
      <FrameComponent1 />
    </div>
  );
};

export default Desktop;
